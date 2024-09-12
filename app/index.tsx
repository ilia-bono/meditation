import { View, Text, ImageBackground, SafeAreaView, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import { Href, useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';

export default function App() {
   const router = useRouter();
   return (
      <View className='flex-1'>
         <ImageBackground source={beachImage as ImageSourcePropType} resizeMode='cover' className='flex-1'>
            <AppGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
               <View>
                  <Text className='text-center text-white font-bold text-4xl'>Simple Medidtation</Text>
                  <Text className='text-center text-white text-regular text-2xl mt-3'>
                     Siplifying Meditation for Evryone
                  </Text>
               </View>

               <View>
                  <CustomButton onPress={() => router.push('/nature-meditate' as Href)} title='Get Started' />
               </View>
               <StatusBar style='light' />
            </AppGradient>
         </ImageBackground>
      </View>
   );
}
