import { supabase } from "@/lib/supabase";

type Student = {
  full_name: string;
  total_lessons: number;
  study_hours: number;
  study_days: number;
  country: string;
  assigned_teacher: string;
  start_date: string;
};

export default function StudentDashboard() {
  return (
    <div>
      <h1>مرحبا بك في لوحة تحكم الطالب</h1>
      <p>هنا ستجد معلوماتك وبياناتك الدراسية.</p>
    </div>
  );
}
