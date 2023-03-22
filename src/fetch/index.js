// Api возвращает за раз по 10 человек, в доке не написано как это изменить, пришлось написать такую штуку чтобы получать все данные разом //

export function getStarWarsPeople(progress, url = 'https://swapi.dev/api/people', people = []) {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((data) => {
            people = people.concat(data.results);
            if (data.next) {
              progress && progress(people);
              getStarWarsPeople(progress, data.next, people).then(resolve).catch(reject);
            } else {
              resolve(people);
            }
          })
          .catch(reject);
      })
      .catch(reject),
  );
}
