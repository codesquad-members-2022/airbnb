import MultiRangeSlider from '@/components/MultiRangeSlider';
import { InputRangeProvider } from '@/components/MultiRangeSlider/context/InputRange';

interface InputRangeProps {
  minPrice: number;
  maxPrice: number;
}

function InputRangeTest({ minPrice, maxPrice }: InputRangeProps) {
  return (
    <InputRangeProvider minPrice={minPrice} maxPrice={maxPrice}>
      <MultiRangeSlider minPrice={minPrice} maxPrice={maxPrice} />
    </InputRangeProvider>
  );
}

export default InputRangeTest;
