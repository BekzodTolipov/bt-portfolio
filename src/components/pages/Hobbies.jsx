import React from 'react';
import BlockContainer from '../helper/BlockContainer';

export default function Hobbies() {
  return (
    <div>
      <BlockContainer
        key={1}
        id={1}
        img={process.env.PUBLIC_URL + '/images/jiu-jitsu.png'}
        alt={'jiu-jitsu'}
        content={
          'My dad been training since he was a kid in Sambo and wanted me to train just like he did. But my interest towards athletic sports never grew until I found jiu-jitsu. I have been practicing jiu-jitsu for a while now, and I found it very interesting on how my body reacts to a pressure. I remember like it was yesterday, my first day in jiu-jitsu where I could not last longer than 1 minute round because my lungs would heart like hell. However, overtime I am learning how to keep my heart rate and my oxygen intake in a balanced pace so I would not gas-out too fast.' +
          ' More I practice different techniques, I sometimes see my body going on autopilot and executes it when my eyes see the opening.' +
          ' It is also considered as lower rate of injuries during training since the people you train with understands that you both want to' +
          ' train as long as possible and avoid injuring each other.'
        }
      />

      <BlockContainer
        key={2}
        id={2}
        img={process.env.PUBLIC_URL + '/images/car-fix.png'}
        alt={'car-fix'}
        content={
          'Growing up my dad and I would fix our car which was manufactured by Lada and we would take the' +
          ' engine out to rebuild the engine. I would be fascinated on how much knowledge he had and every time' +
          ' I work on my truck, I shoot a video so I could share it with my dad and at the same time to help somebody' +
          ' who is in a same situation as me. Funny thing with fixing my semi, when I had to change engine gaskets, I saw' +
          ' couple of zip-ties and laughed on that whole engine functions because all of these zip-ties.'
        }
      />

      <BlockContainer
        key={3}
        id={3}
        img={process.env.PUBLIC_URL + '/images/skydiving.png'}
        alt={'car-fix'}
        content={''}
      />
    </div>
  );
}
