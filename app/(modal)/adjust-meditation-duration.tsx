import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import ADJUST_BUTTONS from '@/constants/adjustMeditationDurationData';
import { router } from 'expo-router';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
   const { setDuration } = useContext(TimerContext);

   const handlePress = (duration: number) => {
      setDuration(duration);
      router.back();
   };
   return (
      <View className='flex-1 relative'>
         <AppGradient colors={['#161e2e', '#0a4d4a', '#766e67']}>
            <BackButton />
            <View className='justify-center h-4/5'>
               <Text className='text-center font-bold text-3xl text-white mb-8'>Adjust your meditation duration</Text>
               <View>
                  {ADJUST_BUTTONS.map((btn) => (
                     <CustomButton
                        key={btn.key}
                        containerStyles='mb-5'
                        onPress={() => handlePress(btn.duration)}
                        title={btn.title}
                     />
                  ))}
               </View>
            </View>
         </AppGradient>
      </View>
   );
};

export default AdjustMeditationDuration;
