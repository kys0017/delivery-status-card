import { memo } from 'react';
import { CheckCircle2, Circle, AlertTriangle } from 'lucide-react';
import { TIMELINE_STEPS, TIMELINE_STEP_INDEX } from '@/constants/delivery';
import type { Delivery } from '@/types/delivery';

interface TimelineProps {
  delivery: Delivery;
}

export const Timeline = memo(function Timeline({ delivery }: TimelineProps) {
  const { status, history } = delivery;
  const activeIndex = TIMELINE_STEP_INDEX[status];
  const isDelayed = status === 'DELAYED';
  const isReturned = status === 'RETURNED';

  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
        배송 단계
      </p>

      <div className="flex items-start gap-0">
        {TIMELINE_STEPS.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isCurrent = index === activeIndex;
          const historyEvent = history.find((h) => h.step === step.key);

          return (
            <div key={step.key} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Step node */}
                <div className="relative flex items-center justify-center">
                  {isCompleted ? (
                    <CheckCircle2
                      size={20}
                      className="text-emerald-500"
                      strokeWidth={2}
                    />
                  ) : isCurrent ? (
                    isDelayed ? (
                      <AlertTriangle
                        size={20}
                        className="text-orange-500"
                        strokeWidth={2}
                      />
                    ) : isReturned ? (
                      <Circle size={20} className="text-red-300" strokeWidth={2} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )
                  ) : (
                    <Circle size={20} className="text-slate-200" strokeWidth={2} />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`mt-1.5 text-xs text-center leading-tight ${
                    isCompleted
                      ? 'text-emerald-600 font-medium'
                      : isCurrent
                        ? isDelayed
                          ? 'text-orange-600 font-semibold'
                          : isReturned
                            ? 'text-red-400 font-medium'
                            : 'text-blue-600 font-semibold'
                        : 'text-slate-300'
                  }`}
                >
                  {step.label}
                </span>

                {/* Timestamp */}
                {historyEvent && (
                  <span className="mt-0.5 text-[10px] text-slate-400 text-center leading-tight">
                    {historyEvent.timestamp.slice(5).replace(' ', ' ')}
                  </span>
                )}
              </div>

              {/* Connector line between steps */}
              {index < TIMELINE_STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mt-2.5 mx-1 rounded ${
                    index < activeIndex ? 'bg-emerald-400' : 'bg-slate-100'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});