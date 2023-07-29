import { useNavigate } from 'react-router';
import img from '../styles/img/img';
import { emailSvg, phoneSvg } from '../styles/img/svg';

import '../styles/PartnerPage.scss';

const PartnerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="partner-page">
      <header className="header">
        <div className="container header__container">
          <img className="header__avatar" src={img.avatar} alt="Аватарка" />
          <div className="header__container-partner">
            <p className="header__name">Имя Фамилия</p>
            <p className="header__partner">Партнер</p>
          </div>
          <button className="header__btn-back" onClick={(e) => navigate(-1)}>
            Вернуться
          </button>
          <button className="header__btn-logout">Выход</button>
        </div>
      </header>
      <main className="main">
        <h1 className="main__title">Партнер</h1>
        <div className="container">
          <section className="section partner">
            <div className="partner__container">
              <p className="partner__text">
                Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая
                такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
                лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и
                увеличивать продажи, используя самые современные аналитические инструменты. <br />
                <br /> В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
                трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это
                осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в
                том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться
                самостоятельно" <br />
                <br /> Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
                предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в
                Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
              </p>

              <div className="partner__contacts">
                <a href="" className="partner__contacts-tel">
                  {phoneSvg}8-926-591-01-71
                </a>
                <a href="" className="partner__contacts-email">
                  {emailSvg}email
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PartnerPage;
