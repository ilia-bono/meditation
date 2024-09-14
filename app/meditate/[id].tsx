import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import BackButton from '@/components/BackButton';
import { Href, router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { Audio } from 'expo-av';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
   const { id } = useLocalSearchParams();
   const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

   const [isMeditating, setMeditating] = useState(false);
   const [audioSound, setSound] = useState<Audio.Sound>();
   const [isPlayingAudio, setPlayingAudio] = useState(false);

   const pretifyNumber = (n: number) => (n < 10 ? `0${n}` : n.toString());

   const minutes = pretifyNumber(Math.floor(secondsRemaining / 60));
   const seconds = pretifyNumber(secondsRemaining % 60);

   const handleAdjustDuration = () => {
      if (isMeditating) toggleMeditationSessionStatus();

      router.push('/(modal)/adjust-meditation-duration' as Href<string>);
   };

   const toggleMeditationSessionStatus = async () => {
      if (secondsRemaining === 0) setDuration(10);

      setMeditating((prev) => !prev);

      await toggleSound();
   };

   const toggleSound = async () => {
      const sound = audioSound ? audioSound : await initializeSound();

      const status = await sound?.getStatusAsync();

      if (status?.isLoaded && !isPlayingAudio) {
         await sound.playAsync();
         setPlayingAudio(true);
      } else {
         await sound.pauseAsync();
         setPlayingAudio(false);
      }
   };

   const initializeSound = async () => {
      const audioFileName = MEDITATION_DATA[Number(id)].audio;
      const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
      setSound(sound);
      return sound;
   };

   useEffect(() => {
      let timerId: NodeJS.Timeout;

      // Exit early when we reach 0
      if (secondsRemaining === 0) {
         if (isPlayingAudio) audioSound?.pauseAsync();
         setMeditating(false);
         setPlayingAudio(false);
         return;
      }

      if (isMeditating) {
         // Save the interval ID to clear it when the component unmounts
         timerId = setTimeout(() => {
            setDuration(secondsRemaining - 1);
         }, 1000);
      }

      // Clear timeout if the component is unmounted or the time left changes
      return () => {
         clearTimeout(timerId);
      };
   }, [secondsRemaining, isMeditating]);

   useEffect(() => {
      return () => {
         audioSound?.unloadAsync();
      };
   }, [audioSound]);

   return (
      <View className='flex-1'>
         <ImageBackground
            className='flex-1'
            source={MEDITATION_IMAGES[Number(id) - 1] as ImageSourcePropType}
            resizeMode='cover'
         >
            <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
               <BackButton callback={() => setDuration(10)} />
               <View className='flex-1 justify-center'>
                  <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
                     <Text className='text-4xl text-blue-800 font-rmono'>
                        {minutes}:{seconds}
                     </Text>
                  </View>
               </View>
               <View className='mb-5'>
                  {!isMeditating && (
                     <CustomButton containerStyles='mb-4' onPress={handleAdjustDuration} title='Adjust Duration' />
                  )}
                  <CustomButton
                     onPress={toggleMeditationSessionStatus}
                     title={`${isMeditating ? 'Stop' : 'Start'} Meditation`}
                  />
               </View>
            </AppGradient>
         </ImageBackground>
      </View>
   );
};

export default Meditate;
