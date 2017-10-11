// TypeScript Version: 2.2

import * as React from "react";
import { LocaleUtils, ModifiersUtils, DateUtils } from "./utils";
import { ClassNames, DayModifiers, Modifier, Modifiers } from "./common";
import { CaptionElementProps, NavbarElementProps, WeekdayElementProps, DayPickerProps } from "./props";

export class DayPicker<T extends DayPickerProps> extends React.Component<T, any> {
  static VERSION: string;
  static LocaleUtils: LocaleUtils;
  static DateUtils: DateUtils;
  static ModifiersUtils: ModifiersUtils;
  showMonth(month: Date): void;
  showPreviousMonth(): void;
  showNextMonth(): void;
  showPreviousYear(): void;
  showNextYear(): void;
  renderMonths(): any;
}
