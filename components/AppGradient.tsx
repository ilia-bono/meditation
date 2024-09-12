import { SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface AppGradientProps {
   children: React.ReactNode;
   colors: string[];
}
const AppGradient = ({ children, colors }: AppGradientProps) => {
   return (
      <LinearGradient className='flex-1' colors={colors}>
         <SafeAreaView className='flex-1 mx-5 my-10 justify-between'>{children}</SafeAreaView>
      </LinearGradient>
   );
};

export default AppGradient;
