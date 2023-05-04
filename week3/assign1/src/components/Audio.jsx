import styled from "styled-components";
const Audio = ({ bgm }) => {
  return (
    <AudioWrapper>
      <audio
        autoPlay
        controls
        onLoadStart={(e) => {
          e.target.volume = 0.01;
        }}
      >
        <source src={bgm} type="audio/mp3" />
      </audio>
    </AudioWrapper>
  );
};

export default Audio;

const AudioWrapper = styled.aside`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;

  border: 0.3rem double ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.grey};

  & > audio {
    width: 7rem;
    height: 2rem;
  }
`;
