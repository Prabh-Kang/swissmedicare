import { useRef, useEffect, useState } from 'react';

const UpdatedComponent = OriginalComponent => {
  const IntersectionObserver = () => {
    const componentRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting)
      });
      observer.observe(componentRef.current);
    }, [])
    return <OriginalComponent isVisible={isVisible} ref={componentRef}/>
  }
  return IntersectionObserver;

}

export default UpdatedComponent;