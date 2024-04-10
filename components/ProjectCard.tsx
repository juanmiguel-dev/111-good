import Head from 'next/head';

function VideoPage() {
  return (
    <div>
      <h1>Video Page</h1>
      <video autoPlay loop>
        <source src="/portfolio.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoPage;
