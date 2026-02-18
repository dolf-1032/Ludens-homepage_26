'use client';

import Image from 'next/image';
import { useState } from 'react'; // 모달 상태 관리를 위해 추가
import mailLogo from '../../assets/icons/mail.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import youtubeLogo from '../../assets/icons/youtube.svg';
import notionLogo from '../../assets/icons/notion.svg';
import { LUDENS_EMAIL, LUDENS_INSTAGRAM, LUDENS_YOUTUBE, LUDENS_NOTION } from '@/constants/ludens';

function Contacts() {
  // 모달창 열림/닫힘 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case 'mail':
        // 기존의 메일 앱 열기(window.open)를 지우고, 모달 열기 함수를 실행합니다.
        openModal();
        break;
      case 'youtube':
        window.open(LUDENS_YOUTUBE);
        break;
      case 'notion':
        window.open(LUDENS_NOTION);
        break;
      default:
        window.open(LUDENS_INSTAGRAM);
        break;
    }
  };

  return (
    <>
      {/* 기존 아이콘 영역 */}
      <div className="flex gap-2">
        <Image className="cursor-pointer hover:opacity-80 transition-opacity"
          src={mailLogo}
          width={32}
          height={32}
          id="mail"
          alt="메일"
          onClick={handleClick}
        />
        <Image className="cursor-pointer hover:opacity-80 transition-opacity"
          src={instagramLogo}
          width={28}
          height={28}
          id="instagram"
          alt="인스타그램"
          onClick={handleClick}
        />
        <Image className="cursor-pointer hover:opacity-80 transition-opacity"
          src={youtubeLogo}
          width={30}
          height={30}
          id="youtube"
          alt="유튜브"
          onClick={handleClick}
        />
        <div/>
        <Image className="cursor-pointer hover:opacity-80 transition-opacity"
          src={notionLogo}
          width={19}
          height={19}
          id="notion"
          alt="노션"
          onClick={handleClick}
        />
      </div>

      {/* 새롭게 추가된 모달(팝업) 창 영역 */}
      {isModalOpen && (
          <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
          >
              <div 
                  className="relative w-full max-w-sm p-8 bg-neutral-800 rounded-2xl shadow-2xl text-center flex flex-col items-center cursor-default"
                  onClick={(e) => e.stopPropagation()}
              >
                  <button 
                      onClick={closeModal} 
                      className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                  >
                      &times;
                  </button>
                  
                  <h3 className="text-xl font-bold text-white mb-6">문의</h3>
                  <div className="text-gray-200 space-y-2 text-base w-full">
                      <p><span className="font-semibold text-white">회장</span> 권신혁</p>
                      <p>tlsgur0427@khu.ac.kr</p>
                      <p>010-8920-0427</p>
                      <p className="pt-2">
                          <a 
                              href="https://open.kakao.com/o/sDlXLrbi" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                          >
                              카카오톡 오픈채팅
                          </a>
                      </p>
                  </div>
                  <p className="mt-8 text-sm text-gray-400">상기 연락처로 문의 부탁드립니다!</p>
              </div>
          </div>
      )}
    </>
  );
}

export default Contacts;