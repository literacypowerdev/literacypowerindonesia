import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { animateScroll as scroll } from 'react-scroll';

import ProjectCard from "../../molecules/ProjectCard";

export default function Projects({ children }: any) {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 150
    });
  };

  return (
    <>
    </>
  );
}
