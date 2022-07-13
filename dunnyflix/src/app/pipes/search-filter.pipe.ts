import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    if(!list) {
      return []
    }
    if(!filterText) {
      return list;
    }
    filterText = filterText.toLocaleLowerCase();
    // let newList = [];
    // for (let i = 0; i<list.length; i++) {
    //   const movies = list[i].movies;
    //   movies.filter()
    // }
  
    // tmpList.forEach(it => {
    //   it.movies.filter(movie => {
    //     return movie.title.toLocaleLowerCase().includes(filterText);
    //   });
    // })
    list = list.filter(it => {
      return it.title.toLocaleLowerCase().includes(filterText);
    });
    // list = list.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return list;  
  }

}
