import React from "react";
import styled from "styled-components";
import SignUpModal from "./SignUpModal";
import { useSelector, RootState } from "../../store";

interface IProps {
  closeModal: () => void;
}
