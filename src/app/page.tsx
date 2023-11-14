'use client'
import styles from './page.module.css'
import React, {useEffect} from "react";

export default function Home() {
    const [ready, setReady] = React.useState(false)
    useEffect(() => {
        if (ready) return;
        import('@usdv/usdv-widget').then(({bootstrapWidget, themes}) => {
            bootstrapWidget({color: 2, theme:themes.light, isTestnet: false, bridgeRecolorConfig: [
                {
                    address: '0x8b532a531aB6962bcA2797425d80fcFf8e440f07',
                    chainKey: 'bsc',
                },
                {
                    address: '0x39b19f5a4BB4934BAeB58bcbB4443f5d66D7EC92',
                    chainKey: 'avalanche',
                },
                {
                    address: '0xe021fA7D449e67b5ED01CC8F4Fd389f42ffFCaFD',
                    chainKey: 'arbitrum',
                },
                {
                    address: '0x68C5bd7917912325B88C5E4393e012546B9e1cf3',
                    chainKey: 'optimism',
                },
            ]});
            // bootstrapWidget({color: 3, theme:themes.light, isTestnet: false, bridgeRecolorConfig: [
            //         {
            //             address: '0x292dD933180412923ee47fA73bBF407B6d776B4C',
            //             chainKey: 'avalanche',
            //         },
            //         {
            //             address: '0x5CC0189652Ee881526eD3B8053B21c44e99010B9',
            //             chainKey: 'arbitrum',
            //         },
            //         {
            //             address: '0x5B1d0467BED2e8Bd67c16cE8bCB22a195ae76870',
            //             chainKey: 'bsc',
            //         },
            //         {
            //             address: '0x31691Fd2Cf50c777943b213836C342327f0DAB9b',
            //             chainKey: 'optimism',
            //         },
            //     ]});
            setReady(true)
        });
        }, [])

  return (
    <main className={styles.main}>
        {ready && <usdv-widget></usdv-widget>}
    </main>
  )
}