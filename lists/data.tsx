type FlatItemProps = {
  city: string,
  cityDay: string
}

export const data: FlatItemProps[] = [
  {city: 'Kharkiv', cityDay:'August 23'},
  {city: 'Lviv', cityDay:'April 26-27'},
  {city: 'Ivano-Frankivsk', cityDay:'May 7'},
  {city: 'Kyiv', cityDay:'May 25 (last Sunday of May)'},
  {city: 'Sumy', cityDay:'September 2'},
  {city: 'Vinnytsia', cityDay:'September 13'},
  {city: 'Zhytomyr', cityDay:'September 13'},
  {city: 'Kropyvnytskyi', cityDay:'September 19'},
  {city: 'Zaporizhzhia', cityDay:'September 2'},
  {city: 'Nizhyn', cityDay:'October 3'},
  {city: 'Odesa', cityDay:'March 26'},
  
]

type SectionProps = {
  title: string,
  data: Item[],
  color: string
}

type Item = {
  title: string;
  uri: string;
}

export const dataSection : SectionProps[] = [
  {
    title: 'Western Ukraine',
    data: [
      {title: 'Lviv', uri: 'https://images.pexels.com/photos/9155942/pexels-photo-9155942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Ivano-Frankivsk', uri: 'https://images.pexels.com/photos/9287066/pexels-photo-9287066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Ternopil ', uri: 'https://images.pexels.com/photos/18874023/pexels-photo-18874023/free-photo-of-windows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Chernivtsi', uri: 'https://images.pexels.com/photos/12936946/pexels-photo-12936946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Uzhhorod', uri: 'https://images.pexels.com/photos/22128799/pexels-photo-22128799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    ],
    color: ''
  },
  {
    title: 'Central Ukraine',
    data: [
      {title: 'Kyiv ', uri: 'https://images.pexels.com/photos/18223592/pexels-photo-18223592.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Vinnytsia', uri: 'https://images.pexels.com/photos/11189462/pexels-photo-11189462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
      {title: 'Cherkasy ', uri: 'https://images.pexels.com/photos/9643113/pexels-photo-9643113.jpeg'},
      {title: 'Kropyvnytskyi ', uri: ''},
      {title: 'Poltava ', uri: ''},
    ],
    color: ''
  },
  {
    title: 'Eastern Ukraine',
    data: [
      {title: 'Kharkiv ', uri: ''},
      {title: 'Donetsk', uri: ''},
      {title: 'Luhansk ', uri: ''},
      {title: 'Mariupol ', uri: ''},
      {title: 'Kramatorsk', uri: ''},
    ],
    color: ''
  },
  {
    title: 'Northern Ukraine',
    data: [
      {title: 'Chernihiv ', uri: ''},
      {title: 'Sumy', uri: ''},
      {title: 'Zhytomyr  ', uri: ''},
      {title: 'Konotop ', uri: ''},
      {title: 'Nizhyn', uri: ''},
    ],
    color: ''
  },
  {
    title: 'Southern Ukraine ',
    data: [
      {title: 'Odesa ', uri: ''},
      {title: 'Mykolaiv ', uri: ''},
      {title: 'Kherson  ', uri: ''},
      {title: 'Zaporizhzhia', uri: ''},
      {title: 'Melitopol', uri: ''},
    ],
    color: ''
  }
]