import { View, Text, ImageBackground, ImageSourcePropType, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery';
import AppGradient from '@/components/AppGradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import BackButton from '@/components/BackButton';

const AffirmationPractice = () => {
   const { itemId } = useLocalSearchParams();

   const [affirmation, setAffirmation] = useState<GalleryPreviewData | null>(null);

   const getSentences = (affirmation: GalleryPreviewData) => {
      const affirmationArray = affirmation.text.split('.');
      if (affirmationArray[affirmationArray.length - 1] === '') {
         affirmationArray.pop();
      }
      return affirmationArray;
   };
   const sentences = affirmation ? getSentences(affirmation) : null;

   useEffect(() => {
      for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
         const gallary = AFFIRMATION_GALLERY[index].data;
         const searchRes = gallary.find((item) => item.id === Number(itemId));
         if (searchRes) {
            setAffirmation(searchRes);
            break;
         }
      }
   }, []);

   return !!affirmation ? (
      <View className='flex-1'>
         <ImageBackground className='flex-1' source={affirmation.image as ImageSourcePropType}>
            <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
               <BackButton />
               <ScrollView showsVerticalScrollIndicator={false} className='mt-4'>
                  <View className='h-full justify-center'>
                     <View className='h-4/5 justify-center'>
                        {sentences && sentences.length > 0
                           ? sentences?.map((sentence, idx) => (
                                <Text
                                   key={sentence.replaceAll(' ', '')}
                                   className='text-white text-3xl mb-7 font-bold text-center'
                                >
                                   {sentence}.
                                </Text>
                             ))
                           : ''}
                     </View>
                  </View>
               </ScrollView>
            </AppGradient>
         </ImageBackground>
      </View>
   ) : (
      <View>
         <Text>Something went wrong</Text>
      </View>
   );
};

export default AffirmationPractice;
