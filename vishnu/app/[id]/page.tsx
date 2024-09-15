import dynamic from "next/dynamic";
//import * as maptilersdk from '@maptiler/sdk';


const Map = dynamic(() => import('./map'), {
  ssr: false,
});

export default async function Index() {
  
  /**const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: [16,49],
    zoom: 14
  })*/
  return (
    <>
        <Map/>
    </>
  );
}
