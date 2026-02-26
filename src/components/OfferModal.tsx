import { useState, FormEvent, useRef } from "react";
import { Send, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { offerWebhookUrl } from "@/config/webhook";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

interface OfferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OfferModal = ({ open, onOpenChange }: OfferModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.size > MAX_FILE_SIZE) {
      toast({
        title: "Archivo demasiado grande",
        description: "El archivo no puede superar los 5 MB.",
        variant: "destructive",
      });
      e.target.value = "";
      return;
    }
    setFile(selected);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData();
    formData.append("name", (form.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("company", (form.elements.namedItem("company") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("phone", (form.elements.namedItem("phone") as HTMLInputElement).value);
    formData.append("reason", "Mejora de oferta");
    formData.append("message", (form.elements.namedItem("message") as HTMLTextAreaElement).value);
    if (file) {
      const ext = file.name.includes(".") ? file.name.substring(file.name.lastIndexOf(".")) : "";
      const renamed = new File([file], `mejorame${ext}`, { type: file.type });
      formData.append("file", renamed);
      formData.append("originalFileName", file.name);
    }

    setLoading(true);
    try {
      const res = await fetch(offerWebhookUrl, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("[Mejora de oferta] Webhook falló:", res.status, res.statusText, text);
        throw new Error(`Error al enviar (${res.status})`);
      }
      toast({
        title: "Oferta enviada",
        description: "Revisaremos tu oferta y te responderemos lo antes posible.",
      });
      form.reset();
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      onOpenChange(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message.startsWith("Error al enviar (")) {
        console.error("[Mejora de oferta] El servidor del webhook respondió con error. Revisa la consola para más detalles.");
      } else {
        console.error("[Mejora de oferta] Error de red o al enviar:", err);
      }
      toast({
        title: "Error al enviar",
        description: "No se pudo enviar. Inténtalo de nuevo o contáctanos por teléfono.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Mejora de oferta</DialogTitle>
          <DialogDescription>
            Envíanos tu oferta actual y te confirmaremos si podemos mejorarla.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="offer-name" className="block text-sm font-semibold mb-1">
                Nombre *
              </label>
              <Input id="offer-name" name="name" required placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="offer-company" className="block text-sm font-semibold mb-1">
                Empresa
              </label>
              <Input id="offer-company" name="company" placeholder="Tu empresa" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="offer-email" className="block text-sm font-semibold mb-1">
                Email *
              </label>
              <Input id="offer-email" name="email" type="email" required placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="offer-phone" className="block text-sm font-semibold mb-1">
                Teléfono
              </label>
              <Input id="offer-phone" name="phone" type="tel" placeholder="Tu teléfono" />
            </div>
          </div>

          <div>
            <label htmlFor="offer-message" className="block text-sm font-semibold mb-1">
              Mensaje
            </label>
            <Textarea
              id="offer-message"
              name="message"
              rows={3}
              placeholder="Detalles adicionales sobre tu oferta..."
            />
          </div>

          {/* File upload */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Adjuntar oferta (PDF, Excel — máx. 5 MB)
            </label>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.xls,.xlsx,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            {file ? (
              <div className="flex items-center gap-2 p-3 rounded-md border border-border bg-accent text-sm">
                <Upload className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="truncate flex-1">{file.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileRef.current?.click()}
              >
                <Upload className="mr-2 h-4 w-4" />
                Seleccionar archivo
              </Button>
            )}
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
            {loading ? "Enviando..." : "Enviar oferta"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfferModal;
