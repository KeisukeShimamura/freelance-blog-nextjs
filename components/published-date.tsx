import { formatDate } from '@/libs/utils';
import { ClockIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

type Props = {
  publishedDate: string;
  updatedDate: string;
};

export default function PublishedDate({ publishedDate, updatedDate }: Props) {
  return (
    <span className="flex text-sm items-center gap-2 my-3 leading-4">
      <ClockIcon width={16} height={16} />
      {formatDate(publishedDate)}
      <ArrowPathIcon width={16} height={16} />
      {formatDate(updatedDate)}
    </span>
  );
}
