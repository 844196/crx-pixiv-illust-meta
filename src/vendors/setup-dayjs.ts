import { extend, locale } from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';

locale('ja');

extend(relativeTime);
