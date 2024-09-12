import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import BackButton from '@/components/BackButton';

const Meditate = () => {
   return (
      <View className='flex-1'>
         <ImageBackground className='flex-1' source={MEDITATION_IMAGES[0] as ImageSourcePropType} resizeMode='cover'>
            <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
               <BackButton />
               <Text>Meditate</Text>
            </AppGradient>
         </ImageBackground>
      </View>
   );
};

export default Meditate;
