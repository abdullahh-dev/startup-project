export type STARTUP_TYPE = {
  _id: number;
  tile: string;
  author: {
    _id: number;
    name: string;
  };
  views: number;
  image: string;
  category: string;
  _createdAt: string;
};
