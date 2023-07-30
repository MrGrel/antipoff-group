import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useTypeDispatch, useTypeSelector } from '../hooks/redux';
import { getPartnerData } from '../store/actionCreator';

import { BackButton } from '../components/button/BackButton';
import { LogOut } from '../components/button/LogOut';
import { emailSvg, phoneSvg } from '../styles/img/svg';

import '../styles/PartnerPage.scss';

const PartnerPage = () => {
  const { partner } = useTypeSelector((state) => state.partnerReducer);
  const dispatch = useTypeDispatch();
  const param = useParams();

  useEffect(() => {
    if (!partner) {
      dispatch(getPartnerData(Number(param)));
    }
  }, []);

  return (
    <div className="partner-page">
      <header className="header">
        <div className="container header__container">
          <img className="header__avatar" src={partner?.avatar} alt="Аватарка" />
          <div className="header__container-partner">
            <p className="header__name">{`${partner?.first_name} ${partner?.last_name}`}</p>
            <p className="header__partner">Партнер</p>
          </div>
          <BackButton className="header__btn-back" />
          <LogOut className="header__btn-logout" />
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
                <a href="tel:89265910171" className="partner__contacts-tel">
                  {phoneSvg}8-926-591-01-71
                </a>
                <a href="https://yandex.ru" className="partner__contacts-email">
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
