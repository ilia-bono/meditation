import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AffirmationItem from './AffirmationItem';

interface GuidedAffirmationsGalleryProops {
   title: string;
   previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({ title, previews }: GuidedAffirmationsGalleryProops) => {
   return (
      <View className='my-5'>
         <View className='mb-2'>
            <Text className='text-white font-bold text-xl'>{title}</Text>
         </View>
         <View className='space-y-2'>
            <FlatList
               data={previews}
               horizontal
               showsHorizontalScrollIndicator={false}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => <AffirmationItem item={item} />}
            />
         </View>
      </View>
   );
};

export default GuidedAffirmationsGallery;
