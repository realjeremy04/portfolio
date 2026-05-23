// import React, { useEffect, useState } from 'react';
// import styles from './LoadingScreen.module.css';

// const LoadingScreen: React.FC = () => {
//     const [progress, setProgress] = useState(0);
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setProgress((prev) => {
//                 const max = 85;
//                 if (prev >= max) {
//                     return max;
//                 }
//                 const increment = Math.random() * 5;
//                 return Math.min(prev + increment, max);
//             });
//         }, 100);

//         let windowLoaded = false;
//         let videoReady = false;

//         const tryFinishLoading = () => {
//             // Only finish if both conditions are met
//             // Note: If you have no video on other pages, you might need a timeout fallback!
//             // For now, assuming IntroVideo is always present on Home.
//             if (windowLoaded && videoReady) {
//                 clearInterval(interval);
//                 setProgress(100);
//                 setTimeout(() => setIsLoaded(true), 500);
//             }
//         };

//         const handleLoad = () => {
//             windowLoaded = true;
//             tryFinishLoading();
//         };

//         const handleVideoReady = () => {
//             videoReady = true;
//             tryFinishLoading();
//         };

//         // Fallback: If video takes too long (> 5s), just force open
//         const fallbackTimeout = setTimeout(() => {
//             console.warn("Video load timeout, forcing open.");
//             videoReady = true;
//             windowLoaded = true;
//             tryFinishLoading();
//         }, 5000);

//         if (document.readyState === 'complete') {
//             windowLoaded = true;
//         } else {
//             window.addEventListener('load', handleLoad);
//         }

//         window.addEventListener('video-ready', handleVideoReady);

//         return () => {
//             window.removeEventListener('load', handleLoad);
//             window.removeEventListener('video-ready', handleVideoReady);
//             clearInterval(interval);
//             clearTimeout(fallbackTimeout);
//         };
//     }, []);

//     return (
//         <div className={`${styles.container} ${isLoaded ? styles.hidden : ''}`}>
//             <div className={styles.content}>
//                 <div className={styles.text}>Please wait...</div>
//                 <div className={styles.progressBarContainer}>
//                     <div
//                         className={styles.progressBar}
//                         style={{ width: `${progress}%` }}
//                     />
//                 </div>
//                 <div className={styles.percentage}>{Math.round(progress)}%</div>
//             </div>
//         </div>
//     );
// };

// export default LoadingScreen;


import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';
import hero from '../../assets/heroImage.jpg';
import about from '../../assets/aboutMe.jpg';

const CRITICAL_IMAGES = [
  hero,
  about,
];

const MIN_LOADING_TIME = 1200;
const MAX_LOADING_TIME = 4000;

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = src;

    img.onload = async () => {
      try {
        if ('decode' in img) {
          await img.decode();
        }
      } catch {
        // Ignore decode errors and continue
      }

      resolve();
    };

    img.onerror = () => {
      resolve();
    };
  });
};

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90;
        return Math.min(prev + Math.random() * 5, 90);
      });
    }, 100);

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsed, 0);

      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);

        setTimeout(() => {
          setIsLoaded(true);
        }, 400);
      }, remainingTime);
    };

    const preloadCriticalImages = Promise.all(
      CRITICAL_IMAGES.map((src) => preloadImage(src))
    );

    const maxTimeout = new Promise<void>((resolve) => {
      setTimeout(resolve, MAX_LOADING_TIME);
    });

    Promise.race([preloadCriticalImages, maxTimeout]).then(() => {
      finishLoading();
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isLoaded ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <div className={styles.text}>Please wait...</div>

        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.percentage}>{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;