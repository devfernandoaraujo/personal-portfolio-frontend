import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Skills.module.scss';

interface Skill {
  src: string;
  name: string;
  category: string;
}

const SkillsComponent: NextPage = () => {
  const skills: Skill[] = [
    { src: '/images/html.svg',               name: 'HTML 5',          category: 'Frontend' },
    { src: '/images/javascript.svg',         name: 'JavaScript',      category: 'Frontend' },
    { src: '/images/typescript.svg',         name: 'TypeScript',      category: 'Frontend' },
    { src: '/images/react.svg',              name: 'React',           category: 'Frontend' },
    { src: '/images/bootstrap-5.svg',        name: 'Bootstrap',       category: 'Frontend' },
    { src: '/images/jquery.svg',             name: 'jQuery',          category: 'Frontend' },
    { src: '/images/asp-net.webp',           name: 'ASP.NET',         category: 'Backend' },
    { src: '/images/c-sharp.svg',            name: 'C#',              category: 'Backend' },
    { src: '/images/sql-server.svg',         name: 'SQL Server',      category: 'Data & Tools' },
    { src: '/images/json.svg',               name: 'JSON',            category: 'Data & Tools' },
    { src: '/images/git.svg',                name: 'Git',             category: 'Data & Tools' },
    { src: '/images/visual-studio.svg',      name: 'Visual Studio',   category: 'Data & Tools' },
    { src: '/images/visual-studio-code.svg', name: 'VS Code',         category: 'Data & Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Data & Tools'];

  return (
    <section className={'skill_area_two'} id="skill">
      <div className={'container'}>
        <div className={`section_title_two text-center ${styles.sectionHeader}`}>
          <h6>My Featured Skills</h6>
          <h2>Some Interesting Facts About Me.</h2>
          <p>
            I realized that running is a part of my life. Through running, I discovered that I could
            improve my skills in any subject I want to learn or do.
          </p>
        </div>

        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category} className={styles.categoryGroup}>
              <h5 className={styles.categoryLabel}>{category}</h5>
              <div className={styles.skillGrid}>
                {categorySkills.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className={styles.cta}>
          <a href="#contacts" className={'theme_btn active'}>
            Let&apos;s work together <i className={'arrow_right'}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
