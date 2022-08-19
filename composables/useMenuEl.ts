import { useState } from "#app";
import MenuElModel from "~/models/MenuElModel";

export const useMenuEL = () =>
  useState<MenuElModel[]>("el", () =>
    [
      {
        id: 0,
        svg: "start",
        description: "",
        emit: "start"
      },
      {
        id: 1,
        svg: "fullScreen",
        description: "",
        emit: "resize"
      },
      {
        id: 2,
        svg: "music",
        description: "",
        emit: "play"
      }
    ]);
