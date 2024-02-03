import { Link } from 'react-router-dom';
import { Schools } from '../../types/Schools';
import style from './InstitutionCard.module.css';

type InstitutionCardProp = {
  content: Schools[]
};

function InstitutionCard({ content }: InstitutionCardProp) {
  const array = content;
  return (
    <div className={ style.cardContainer }>
      { array.map((school, i) => (
        <Link to={ `/institutions/${school.id}` } key={ i } className={ style.container }>
          <div className={ style.card }>
            <img src={ school.image } alt={ school.name } className={ style.imgCard } />
          </div>
          <div>
            <h3 className={ style.nameCard }>{school.name}</h3>
            {/* <p className={ style.sm }>Saiba mais...</p> */}
          </div>
        </Link>

      )) }

    </div>
  );
}

export default InstitutionCard;
