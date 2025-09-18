import { CiMobile3 } from "react-icons/ci";
import {
  FaArrowRight,
  FaCircle,
  FaDesktop,
  FaGlobeAmericas,
  FaLink,
} from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { PiLessThanBold } from "react-icons/pi";

const Performance = () => {
  return (
    <>
      <section>
        <div className="container mx-auto md:px-5">
          {/* Engagement Metrics — Key Observations */}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">
                📋 Engagement Metrics — Key Observations
              </h3>
            </div>
            <div className="p-5">
              <ul className="space-y-4 list-disc pl-5 text-sm text-[#374151] mb-5">
                <li>
                  Engagement time per active user dropped to 1m 58s from 4–10m
                  last week.
                </li>
                <li>
                  Blog articles remain sticky for a handful of users (example:
                  /blog/nutrition-why-groove-grill-is-one-of-the-most-unique-restaurants-in-detroit
                  avg 18m+ session), but majority of new users bounce quickly.
                </li>
                <li>
                  Funnel is not optimized: sessions are high, but conversion
                  actions are not tracked or encouraged consistently.
                </li>
              </ul>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-gray-700">
                        Add stronger homepage hooks above the fold (e.g., “See
                        Today’s Truck Location” + CTA).
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-gray-700">
                        Push blog readers into menu/find-the-truck pages with
                        inline CTAs.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-gray-700">
                        Use heatmaps/session recordings to identify quick-drop
                        points.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 🎯 Device Insights */}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">🎯 Device Insights</h3>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-3 mb-5">
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center gap-3 justify-between mb-5">
                    <div className="flex items-center space-x-2">
                      <FaDesktop className="text-gray-600 text-md" />
                      <span className="text-[16px] leading-none font-semibold text-gray-800">
                        Desktop Experience
                      </span>
                    </div>
                    <span className="bg-[#7CD5FF80] text-[#0D6EFD] text-xs font-semibold px-4 py-1.5 rounded-full">
                      Excellent
                    </span>
                  </div>

                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      2m 57s
                    </h2>
                  </div>

                  <div className="text-center text-xs text-gray-500 mb-4">
                    30 users (55%) · 622 events
                  </div>

                  {/* Progress Bar */}
                  <div className="px-4">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                      <div className="h-full w-[55%] bg-[#515151] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center gap-3 justify-between mb-5">
                    <div className="flex items-center space-x-2">
                      <HiDevicePhoneMobile className="text-gray-600 text-lg" />
                      <span className="text-[16px] leading-none font-semibold text-gray-800">
                        Mobile Experience
                      </span>
                    </div>
                    <span className="bg-[#FFD1D1] text-[#D30000] text-xs font-semibold px-4 py-1.5 rounded-full">
                      Critical
                    </span>
                  </div>

                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      44s
                    </h2>
                  </div>

                  <div className="text-center text-xs text-gray-500 mb-4">
                    27 (49%) • 143 events
                  </div>

                  {/* Progress Bar */}
                  <div className="px-4">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                      <div className="h-full w-[55%] bg-[#515151] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#17C65321] border-l-[3px] border-[#17C653] rounded-[4px] p-5 mb-7">
                <h4 className="text-[16px] font-semibold text-[#212529] mb-1">
                  Insights:
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>
                    Desktop users are far more engaged (avg session ~3m vs 1m
                    mobile).
                  </li>
                  <li>
                    Mobile users (critical for food truck audiences) are not
                    sticking around.
                  </li>
                </ul>
              </div>
              <h3 className="text-[16px] font-bold mb-4">
                Mobile-First Action Items :
              </h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Compress + lazy-load images, reduce CLS, improve mobile
                        speed.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Simplify mobile nav → 1-tap to “Menu” and “Truck
                        Location”.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Add sticky mobile CTA bar: “Find Truck | See Menu |
                        Order Ahead”.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 🎯 Geo-location & Audience Targeting*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">
                🎯 Geo-location & Audience Targeting
              </h3>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-3 gap-3 mb-5">
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      United States US
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      30 Users
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    55% of traffic • 38s avg engagement
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      India IN
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      324 Users
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    44% of traffic • 3m 43s avg engagement
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      Germany DE
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      1 User
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    1% of traffic • 0s avg engagement
                  </div>
                </div>
              </div>
              <div className="bg-[#17C65321] border-l-[3px] border-[#17C653] rounded-[4px] p-5 mb-7">
                <h4 className="text-[16px] font-semibold text-[#212529] mb-1">
                  Insights:
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>
                    US traffic volume rose (17 → 30 users), but engagement
                    remains weak (38s avg).
                  </li>
                  <li>
                    India’s smaller audience is highly engaged (3m 43s avg).
                  </li>
                </ul>
              </div>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Add Detroit/US-local cues to homepage hero and meta tags
                        (clearer local identity).
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Launch a “This Week’s Truck Schedule (Detroit)” landing
                        page to capture/retain local users.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Run Detroit-focused social posts linking directly to
                        /find-the-truck.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 📋  Landing Pages — Conversion Opportunities*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">
                📋 Landing Pages — Conversion Opportunities
              </h3>
            </div>
            <div className="p-5">
              <div className=" mb-5">
                <h3 className="text-[16px] text-[#111827] font-bold mb-3">
                  Top Landing Pages (Week 2):
                </h3>
                <ul className="list-disc pl-5 text-[14px] text-[#374151] space-y-4">
                  <li>/ homepage → 73 sessions, but very low dwell (55s).</li>
                  <li>/our-menu → 9 sessions, only 5s avg.</li>
                  <li>
                    /blogs → 6 sessions, 1s avg (drop from 7m+ last week).
                  </li>
                  <li>
                    Blog post: Nutrition — Why Groove Grill is Unique →
                    standout, 18m 35s avg session.
                  </li>
                </ul>
              </div>
              <div className="bg-[#17C65321] border-l-[3px] border-[#17C653] rounded-[4px] p-5 mb-7">
                <h4 className="text-[16px] font-medium text-[#212529]">
                  <span className="font-bold">Insight</span>: Blogs can hook
                  users, but CTAs are missing. Homepage + menu page are leaking
                  attention.
                </h4>
              </div>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Place menu highlights & truck location links at top fold
                        of homepage.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Add inline CTAs to all high-engagement blog posts.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Ensure /our-menu has visuals, testimonials, and strong
                        CTA (not just text).
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 🎯 Events & Funnel Tracking*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">
                🎯 Events & Funnel Tracking
              </h3>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-3 gap-3 mb-5">
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      United States US
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      30 Users
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    55% of traffic • 38s avg engagement
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      India IN
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      324 Users
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    44% of traffic • 3m 43s avg engagement
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      Germany DE
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      1 User
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    1% of traffic • 0s avg engagement
                  </div>
                </div>
              </div>
              <div className="bg-[#17C65321] border-l-[3px] border-[#17C653] rounded-[4px] p-5 mb-7">
                <h4 className="text-[16px] font-medium text-[#212529] ">
                  <span className="font-bold">Insights</span>: Slight dip in
                  overall events, but form_start improved, showing progress
                  toward capturing leads.
                </h4>
              </div>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Define conversion funnel: homepage → menu → find-truck →
                        form.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Add GA4 tracking for: click-to-call, get-directions,
                        menu-clicks, newsletter signup.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Push form_start → form_submit with better copy + fewer
                        form fields.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 🎯 Acquisition & Channels*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold">
                🎯 Acquisition & Channels
              </h3>
            </div>
            <div className="p-5">
              <div className="grid md:grid-cols-3 gap-3 mb-5">
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      Direct
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      61%
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    36 users • 2m 32s avg
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      Organic Search
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      37%
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    22 users • 1m 03s avg
                  </div>
                </div>
                <div className="border border-[#E9E9E9] bg-[#FBFBFC] rounded-[4px] p-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <FaGlobeAmericas className="text-md" />
                    <span className="text-[16px] leading-none font-semibold text-gray-800">
                      Referral
                    </span>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="text-3xl font-bold text-[#212529] mb-4">
                      2%
                    </h2>
                  </div>
                  <div className="text-center text-xs text-[#374151]">
                    1 user • 1m 33s avg
                  </div>
                </div>
              </div>
              <div className="bg-[#17C65321] border-l-[3px] border-[#17C653] rounded-[4px] p-5 mb-7">
                <h4 className="text-[16px] font-medium text-[#212529] ">
                  <span className="font-bold">Insights</span>: Direct dominates,
                  Organic Search weaker engagement. Referral traffic negligible.
                </h4>
              </div>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Launch 1–2 local SEO landing pages (“Detroit food
                        truck”, “Healthy street food Detroit”).
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Outreach: submit Groove Grill to local event calendars &
                        food directories.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Repurpose blog posts into reels/shorts to push
                        referral/social traffic.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 🎯 Quick Wins (<72 hrs)*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold flex items-center">
                🎯 Quick Wins (<PiLessThanBold size={14} /> 72 hrs)
              </h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-5 text-[#374151] text-sm space-y-4">
                <li>Add “See Today’s Location” CTA button on homepage hero.</li>
                <li>Improve /our-menu with imagery + micro-CTAs.</li>
                <li>
                  Add newsletter/alert signup CTA inside 3 top-performing blogs.
                </li>
                <li>
                  Add newsletter/alert signup CTA inside 3 top-performing blogs.
                </li>
              </ul>
            </div>
          </div>
          {/*🎯 Targets for Next Week*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold flex items-center">
                🎯 Targets for Next Week
              </h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-5 text-[#374151] text-sm space-y-4">
                <li>Increase Avg. mobile session time from 44s → 2m.</li>
                <li>
                  Lift organic traffic share back above 40% (via SEO landing
                  pages).
                </li>
                <li>Convert form_start (9) → form_submit (3+).</li>
                <li>Retain blog depth by embedding stronger CTAs.</li>
              </ul>
            </div>
          </div>
          {/*🎯 Cross-Check with GSC (Week 2 Alignment)*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold flex items-center">
                🎯 Cross-Check with GSC (Week 2 Alignment)
              </h3>
            </div>
            <div className="p-5">
              <ul className="list-disc pl-5 text-[#374151] text-sm space-y-4 mb-5">
                <li>
                  GSC shows 16 clicks / 63 impressions with CTR 25.4%
                  (improved).
                </li>
                <li>Top queries: groove grill, food truck venues near me.</li>
                <li>
                  GA data confirms homepage is over-weighted; subpages are
                  underperforming.
                </li>
                <li>Retain blog depth by embedding stronger CTAs.</li>
              </ul>
              <h3 className="text-[16px] font-bold mb-4">Action Items :</h3>
              <ul className="space-y-4">
                <li>
                  <div
                    className="flex gap-3 items-center justify-between border border-[#0000001A] shadow-[0px_2px_4px_0px_#21252913]
 rounded-[4px] py-2.5 px-4"
                  >
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <p className="text-sm text-[#212529]">
                        Optimize /find-the-truck and /our-menu titles + CTAs to
                        capture these search queries.
                      </p>
                    </div>

                    <span className="text-xs font-semibold bg-red-100 text-red-600 px-4 py-2 rounded-full">
                      High
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*🎯 Week-over-Week Snapshot (Wk1 → Wk2)*/}
          <div className="bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_1px_0px_#00000040] mb-8">
            <div className="bg-[#F3F4F6] border-b border-[#DEE2E6] px-4 py-3">
              <h3 className="text-[16px] font-bold flex items-center">
                🎯 Week-over-Week Snapshot (Wk1 → Wk2)
              </h3>
            </div>
            <div className="p-5">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-5">
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaLink size={22} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Users
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      35 <FaArrowRight size={16} /> 59
                    </h2>
                    <p className="text-[14px] text-[#17C653]">
                      + 69% this week
                    </p>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaCircle className="text-[#D9D9D9]" size={24} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Sessions
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      85 <FaArrowRight size={16} /> 107
                    </h2>
                    <p className="text-[14px] text-[#17C653]">
                      + 26% this week
                    </p>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaCircle className="text-[#D9D9D9]" size={24} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Views/Session
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      4.61 <FaArrowRight size={16} /> 3.28
                    </h2>
                    <p className="text-[14px] text-[#DC2626]">
                      - 29% this week
                    </p>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaCircle className="text-[#D9D9D9]" size={24} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Avg Session Duration
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      10m 23s <FaArrowRight size={16} /> 7m 30s
                    </h2>
                    <p className="text-[14px] text-[#DC2626]">
                      - 28% this week
                    </p>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaLink size={22} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Events
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      845 <FaArrowRight size={16} /> 765
                    </h2>
                    <p className="text-[14px] text-[#DC2626]">- 9% this week</p>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] flex items-start gap-4 rounded-[4px] border border-[#DEE2E6] p-5">
                  <FaCircle className="text-[#D9D9D9]" size={24} />
                  <div>
                    <h5 className="text-[16px] font-medium text-[#212529] leading-none mb-1">
                      Form Starts:
                    </h5>
                    <h2 className="text-[20px] flex items-center gap-2 font-bold text-[#212529] py-1">
                      5 <FaArrowRight size={16} /> 9
                    </h2>
                    <p className="text-[14px] text-[#17C653]">
                      + 80% this week
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE8E8] rounded-[5px] p-5">
                <p className="text-[#212529CC] font-semibold text-[14px] text-center">
                  Takeaway: Traffic is growing rapidly, but user journeys are
                  shorter. Priority is to convert higher traffic into meaningful
                  actions (truck visits, form submits, signups).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Performance;
