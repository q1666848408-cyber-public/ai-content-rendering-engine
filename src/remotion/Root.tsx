/**
 * Remotion root — registers all video compositions.
 * Showcase version: registration only, template logic omitted.
 */

import { Composition } from 'remotion';
import { NewsVideo } from './templates/NewsVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NewsVideo"
        component={NewsVideo as any}
        durationInFrames={60 * 30}
        fps={60}
        width={1080}
        height={1920}
      />
      {/* [Other templates not shown: MixCut, ZineVideo, TutorialMixCut ...] */}
    </>
  );
};
