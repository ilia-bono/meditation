interface AdjustButtonData {
   key: string;
   title: string;
   duration: number;
}
const ADJUST_BUTTONS: AdjustButtonData[] = [
   {
      key: 'button-1',
      title: '10 seconds',
      duration: 10,
   },
   {
      key: 'button-2',
      title: '5 minutes',
      duration: 5 * 60,
   },
   {
      key: 'button-3',
      title: '10 minutes',
      duration: 10 * 60,
   },
   {
      key: 'button-4',
      title: '15 minutes',
      duration: 15 * 60,
   },
];
export default ADJUST_BUTTONS;
