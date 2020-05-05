const getRangeIndices = (list) => list
  .reduce((acc, value, ind) => {
    const firstLetter = value.name.trim()[0].toLowerCase();
    if (acc.letter !== firstLetter) {
      return {
        ...acc,
        letter: firstLetter,
        rangeList: {
          ...acc.rangeList,
          [firstLetter]: [
            ind,
            ind,
          ],
        },
      };
    }
    return {
      ...acc,
      rangeList: {
        ...acc.rangeList,
        [firstLetter]: [
          acc.rangeList[firstLetter][0],
          ind,
        ],
      },
    };
  }, { letter: 'a', rangeList: { a: [0, null] } });

module.exports = getRangeIndices;
