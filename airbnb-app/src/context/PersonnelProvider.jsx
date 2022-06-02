import { createContext, useState } from 'react';
import { PERSONNEL_STATE_KEY, PERSONNEL_MIN as MIN, PERSONNEL_MAX as MAX } from '@/constants/PersonnelText';

const { ADULT, CHILD, INFANT } = PERSONNEL_STATE_KEY;
const stateKeys = Object.values(PERSONNEL_STATE_KEY);

const initialPersonnel = (() => {
  return stateKeys.reduce((initialPersonnel, state) => {
    initialPersonnel[state] = 0;
    return initialPersonnel;
  }, {});
})();

const PersonnelContext = createContext({});

function PersonnelProvider({ children }) {
  const [personnel, setPersonnel] = useState(initialPersonnel);

  const addAdultTogether = title => {
    setPersonnel(prevState => {
      return { ...prevState, [ADULT]: prevState[title] + 1, [title]: prevState[title] + 1 };
    });
  };

  const isNoAdult = title => personnel[ADULT] === 0 && (title === CHILD || title === INFANT);

  const addPerson = title => {
    if (personnel[title] === MAX) return;

    if (isNoAdult(title)) {
      addAdultTogether(title);
    } else {
      setPersonnel(prevState => {
        return { ...prevState, [title]: prevState[title] + 1 };
      });
    }
  };

  const canNotRemoveAdult = title =>
    title === ADULT && personnel[ADULT] === 1 && (personnel[CHILD] || personnel[INFANT]);

  const removePerson = title => {
    if (personnel[title] === MIN) return;
    if (canNotRemoveAdult(title)) return;

    setPersonnel(prevState => {
      return { ...prevState, [title]: prevState[title] - 1 };
    });
  };

  const resetPersonnel = () => {
    setPersonnel(initialPersonnel);
  };

  const personnelValue = (() => {
    if (personnel[ADULT] + personnel[CHILD] + personnel[INFANT] === 0) return '';

    return `게스트${personnel[ADULT] + personnel[CHILD]} 명, 유아${personnel[INFANT]} 명`;
  })();

  return (
    <PersonnelContext.Provider
      value={{ personnel, personnelValue, addPerson, removePerson, canNotRemoveAdult, resetPersonnel }}
    >
      {children}
    </PersonnelContext.Provider>
  );
}

export { PersonnelContext, PersonnelProvider };
