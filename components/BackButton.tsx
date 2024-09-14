import { Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const BackButton = ({ callback }: { callback?: () => void }) => {
   return (
      <Pressable
         className='bg-gray-100/[.3] rounded-full w-14 h-14 justify-center items-center'
         onPress={() => {
            callback && callback();
            router.back();
         }}
      >
         <Ionicons name='arrow-back-circle-outline' size={50} color='white' />
      </Pressable>
   );
};

export default BackButton;
