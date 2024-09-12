import { View, Image, ImageSourcePropType, Pressable } from 'react-native';
import React from 'react';
import { Link, Href } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';

const AffirmationItem = ({ item }: { item: GalleryPreviewData }) => {
   return (
      <Link href={`/affirmations/${item.id}` as Href<string>} asChild>
         <Pressable>
            <View className='h-36 w-32 rounded-md overflow-hidden mr-4'>
               <Image source={item.image as ImageSourcePropType} resizeMode='cover' className='w-full h-full' />
            </View>
         </Pressable>
      </Link>
   );
};

export default AffirmationItem;
