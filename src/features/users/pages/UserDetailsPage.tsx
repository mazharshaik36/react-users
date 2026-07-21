import { useParams } from "react-router-dom";

import {
  BackButton,
  UserProfileCard,
  UserInfoCard,
  AddressCard,
  CompanyCard,
} from "@features/users/components";

import { useUser } from "@features/users/hooks";

export default function UserDetailsPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useUser(id!);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading user.</div>;

  if (!data) return <div>User not found.</div>;

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-6xl">

        <BackButton />

        <UserProfileCard user={data} />

        <div className="grid gap-6 md:grid-cols-2">

          <UserInfoCard user={data} />

          <AddressCard user={data} />

          <div className="md:col-span-2">
            <CompanyCard user={data} />
          </div>

        </div>

      </div>
    </div>
  );
}