import { useState, useCallback } from "react";
export default function useStep(maxStep) {
  const [currentStep, setCurrentStep] = useState(1);
  const next = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, maxStep));
  }, [maxStep]);
  const previous = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);
  const setStep = useCallback(
    (step) => {
      setCurrentStep((prev) => {
        let newStep = typeof step === "function" ? step(prev) : step;
        if (newStep < 1 || newStep > maxStep) return prev;
        return newStep;
      });
    },
    [maxStep]
  );

  return {
    step: currentStep,
    next,
    previous,
    hasNext: currentStep < maxStep,
    hasPrevious: currentStep > 1,
    reset,
    setStep,
  };
}
