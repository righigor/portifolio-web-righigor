import { Link } from 'react-router-dom';
import { Schools } from '../../types/Schools';

type InstitutionCardProp = {
  content: Schools[]
};

function InstitutionCard({ content }: InstitutionCardProp) {
  const array = content;
  return (
    <div>
      { array.map((school, i) => (
        <Link to={ `/institutions/${school.id}` } key={ i }>
          <div>
            <img src={ school.image } alt="" width="200px" />
          </div>
          <div>
            <h2>{school.name}</h2>
          </div>
        </Link>

      )) }

    </div>
  );
}

export default InstitutionCard;
