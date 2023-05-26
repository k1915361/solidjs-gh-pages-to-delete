import { Title } from "solid-start";
import Counter from "../components/Counter";
import Footer from "~/components/layout/footer/footer";
import ScrollButton from "~/components/button/buttonScroll";
import FaceAPIExpressionDemo from "~/components/faceapi/faceExpressionDemo";
import ImageCompress from "~/components/image/compress/image-compress";

export default function Home() {
  let main
  return (
    <main ref={main}>
      <Title>Cyber Data Charts Images</Title>
      <Counter />
      <FaceAPIExpressionDemo />
      <ImageCompress/>
      <ScrollButton text='Scroll to' mainRef={main} />
      <Footer />
    </main>
  );
}
