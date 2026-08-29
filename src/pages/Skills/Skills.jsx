import styles from './Skills.module.scss';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import { scills } from '../../data/data';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <ContainerMain>
        <ul className={styles.scillsList}>
          {scills.map(({ name, img, id }) => {
            return (
              <li key={id} className={styles.skillsItem}>
                <img className={styles.scillsImg} src={img} alt="" />
                {name}
              </li>
            );
          })}
        </ul>
      </ContainerMain>
    </div>
  );
};

export default Skills;
