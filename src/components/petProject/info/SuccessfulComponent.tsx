import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SuccessfulComponentProps {
  show: boolean;
}

const SuccessfulComponent: React.FC<SuccessfulComponentProps> = ({ show }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 
      bg-black bg-opacity-40 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.42, 0, 0.58, 1)]">
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6 text-sky-green rounded-lg shadow-lg">
          <Check className="w-[12rem] h-[12rem] mr-2 animate-pulse bg-surface-neutral rounded-full" />
          <span className="text-sky-green font-bold text-[2rem]">¡Successful!</span>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessfulComponent;