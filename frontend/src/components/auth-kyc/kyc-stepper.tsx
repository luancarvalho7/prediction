import { Stepper } from "@/components/ui/stepper";

interface KycStepperProps {
  current: number;
  className?: string;
}

const KYC_STEPS = ["Informações Pessoais", "Documentos", "Revisão", "Concluído"];

export function KycStepper({ current, className }: KycStepperProps) {
  return <Stepper steps={KYC_STEPS} current={current} className={className} />;
}
