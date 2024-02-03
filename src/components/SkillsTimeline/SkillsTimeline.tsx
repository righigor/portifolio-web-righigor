import { useEffect, useState } from 'react';
import { VerticalTimeline,
  VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { user } from '../../backend/userdb';
import { Skills } from '../../types/User';
import style from './SkillsTimeline.module.css';
import './vertical.css';

function SkillsTimeline() {
  const [skillsArray, setSkillsArray] = useState<Skills[]>();
  // const hatStyle = { background: '#194977', border-color: 'red' };

  useEffect(() => {
    setSkillsArray(user.skills);
  }, []);
  return (
    <div className={ style.container }>
      <VerticalTimeline>
        {
          skillsArray?.map((e) => {
            return (
              <VerticalTimelineElement
                key={ e.id }
                iconStyle={ { background: '#194977' } }
                contentArrowStyle={ { borderRight: '12px solid  var(--gray-200)' } }
              >
                <h3 className={ style.verticalTlTitle }>
                  { e.skill }
                </h3>
                <img src={ e.icon } alt={ e.skill } width="100px" />
              </VerticalTimelineElement>

            );
          })
        }
      </VerticalTimeline>
    </div>
  );
}

export default SkillsTimeline;
