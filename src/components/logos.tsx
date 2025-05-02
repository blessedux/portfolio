import React from 'react';
import Image from 'next/image';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const ChileDAOLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/chiledao_orange 1.png"
      alt="ChileDAO Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const DejavuLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/logo dejavu blanco 1.png"
      alt="Dejavu Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const DOBLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/dob-logo 1.png"
      alt="DOB Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const AlephLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/alephwhite.png"
      alt="Aleph Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const MMLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/MMLOGOPINK 1.png"
      alt="MM Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const Group9044Logo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/Group 9044.png"
      alt="Group 9044 Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const EthereumLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/Ethereum-logo 1.png"
      alt="Ethereum Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const MantleLogo = (props: LogoProps) => (
  <div className="relative" style={{ width: props.width, height: props.height }}>
    <Image
      src="/blessedlogos/mantle-mnt-logo (1) 1.png"
      alt="Mantle Logo"
      fill
      className="object-contain"
    />
  </div>
);

export const logos = [
  { name: "ChileDAO", id: 1, img: ChileDAOLogo },
  { name: "Dejavu", id: 2, img: DejavuLogo },
  { name: "DOB", id: 3, img: DOBLogo },
  { name: "Aleph", id: 4, img: AlephLogo },
  { name: "MM", id: 5, img: MMLogo },
  { name: "Group9044", id: 6, img: Group9044Logo },
  { name: "Ethereum", id: 7, img: EthereumLogo },
  { name: "Mantle", id: 8, img: MantleLogo }
]; 