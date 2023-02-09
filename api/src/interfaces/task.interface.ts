export interface TaskRequest {
  title: string;
  description: string;
  category: string;
}

export interface TaskUpdateRequest {
  title: string;
  description: string;
  status: boolean;
}

interface Category {
  id: string;
  name: string;
}

export interface TaskResponse {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: boolean;
  create_at: Date;
  update_at: Date;
}
