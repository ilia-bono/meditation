import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface TimerContextProps {
   duration: number;
   setDuration: (duration: number) => void;
}

export const TimerContext = createContext<TimerContextProps>({
   duration: 10,
   setDuration: () => {},
});

interface TimerProviderProps {
   children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
   const [duration, setDuration] = useState(10);
   const handleSetDuration = (duration: number) => {
      setDuration(duration);
   };

   return (
      <TimerContext.Provider value={{ duration, setDuration: handleSetDuration }}>{children}</TimerContext.Provider>
   );
};

export default TimerProvider;
