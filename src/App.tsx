import SlideMenu from './components/SliderMenu';
import { slides } from './data/slides';

export function App() {
  return (
    <>
      <SlideMenu items={slides.map(slide => ({
        title: slide.title,
        subtitle: slide.subtitle,
        description: slide.description,
        image: slide.image,
        icon: slide.icon
      }))} />
    </>
  );
}
